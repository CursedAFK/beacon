'use client'

import toast from '@/lib/reactToastify'
import UserLoginCredentialsSchema from '@/schemas/UserLoginCredentials.schema'
import UserRegisterCredentialsSchema from '@/schemas/UserRegisterCredentials.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import EyeOutline from '../Icons/EyeOutline'
import EyeOutlineCrossed from '../Icons/EyeOutlineCrossed'
import Spinner from '../Icons/Spinner'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'

type ApiRegisterResponse = {
  message: string
  user: {
    fullName: string
  }
}

type ApiLoginResponse = {
  message: string
  user: {
    fullName: string
    accessToken: string
  }
}

type ApiError = {
  message: string
}

type AuthState = 'login' | 'register'

type UserLoginCredentials = z.infer<typeof UserLoginCredentialsSchema>

type UserRegisterCredentials = z.infer<typeof UserRegisterCredentialsSchema>

const FormSection = () => {
  const [authState, setAuthState] = useState<AuthState>('register')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const form = useForm<UserLoginCredentials | UserRegisterCredentials>({
    resolver: zodResolver(
      authState === 'login'
        ? UserLoginCredentialsSchema
        : UserRegisterCredentialsSchema
    )
  })

  const watchPassword = form.watch('password')

  const watchConfirmPassword = form.watch('confirmPassword')

  const isPasswordValid = watchPassword === watchConfirmPassword

  const onSubmit = async (
    data: UserLoginCredentials | UserRegisterCredentials
  ) => {
    try {
      setIsLoading(true)

      if (authState === 'register') {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        const responseJson: ApiRegisterResponse = await response.json()

        if (response.status === 400) throw new Error(responseJson.message)

        toast({
          message: `${responseJson.user.fullName} created successfully, Logging In ...`,
          type: 'success'
        })
      }

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const responseJson: ApiLoginResponse = await response.json()

      if (response.status === 400 || response.status === 404) {
        throw new Error(responseJson.message)
      }

      toast({
        message: `Hi ${responseJson.user.fullName}`,
        type: 'success'
      })

      Cookies.set(
        process.env.NEXT_PUBLIC_TOKEN_NAME!,
        responseJson.user.accessToken
      )

      Cookies.set('fullName', responseJson.user.fullName)

      router.push('/explore')
    } catch (error) {
      const apiError = error as unknown as ApiError

      toast({ message: apiError.message, type: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='md:w-[45%] p-7 md:p-10 rounded-lg bg-white space-y-5 md:space-y-7 md:h-[40rem] mt-2 md:mt-0 mx-6 md:mx-0'>
      <p className='md:text-2xl text-base'>
        {authState === 'login'
          ? 'Login to your Beacon account'
          : 'Create your Beacon account'}
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='md:space-y-4 space-y-3'
        >
          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem>
                <FormLabel hidden>Full Name</FormLabel>

                <FormControl>
                  <Input
                    type='text'
                    placeholder='Full Name'
                    {...field}
                    className='md:text-base text-xs py-3 md:py-4 px-4 md:px-5 rounded-lg'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='relative'>
                <FormLabel hidden>Password</FormLabel>

                <FormControl>
                  <Input
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder='Password'
                    {...field}
                    className='md:text-base text-xs py-3 md:py-4 pl-4 md:pl-5 pr-12 md:pr-14 rounded-lg'
                  />
                </FormControl>

                {!isPasswordVisible ? (
                  <EyeOutline
                    className='absolute top-0 right-3 md:right-4 cursor-pointer hover:brightness-50 transition'
                    setIsPasswordVisible={setIsPasswordVisible}
                  />
                ) : (
                  <EyeOutlineCrossed
                    className='absolute top-0 right-3 md:right-4 cursor-pointer hover:brightness-50 transition'
                    setIsPasswordVisible={setIsPasswordVisible}
                  />
                )}

                <FormMessage />
              </FormItem>
            )}
          />

          {authState === 'register' && (
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem className='relative'>
                  <FormLabel hidden>Confirm Password</FormLabel>

                  <FormControl>
                    <Input
                      type={isPasswordVisible ? 'text' : 'password'}
                      placeholder='Confirm Password'
                      {...field}
                      className='md:text-base text-xs py-3 md:py-4 pl-4 md:pl-5 pr-12 md:pr-14 rounded-lg'
                    />
                  </FormControl>

                  {!isPasswordVisible ? (
                    <EyeOutline
                      className='absolute top-0 right-3 md:right-4 cursor-pointer hover:brightness-50 transition'
                      setIsPasswordVisible={setIsPasswordVisible}
                    />
                  ) : (
                    <EyeOutlineCrossed
                      className='absolute top-0 right-3 md:right-4 cursor-pointer hover:brightness-50 transition'
                      setIsPasswordVisible={setIsPasswordVisible}
                    />
                  )}

                  <FormMessage>
                    {watchConfirmPassword &&
                      !isPasswordValid &&
                      'Passwords do not match'}
                  </FormMessage>
                </FormItem>
              )}
            />
          )}

          <div>
            <Button
              type='submit'
              className='w-full py-4 md:py-5 rounded-lg mt-2 md:mt-3 text-xs md:text-base font-semibold border bg-[#60007D]'
              disabled={
                authState === 'register' ? !isPasswordValid || isLoading : false
              }
            >
              {isLoading ? (
                <Spinner />
              ) : authState === 'login' ? (
                'Login'
              ) : (
                'Create Account'
              )}
            </Button>
          </div>
        </form>
      </Form>

      {authState === 'login' ? (
        <p className='text-[#756D79] text-[0.6rem] md:text-xs'>
          Don&apos;t have an account?{' '}
          <span
            className='font-semibold cursor-pointer hover:underline active:underline'
            onClick={() => setAuthState('register')}
          >
            Create one
          </span>
        </p>
      ) : (
        <p className='text-[#756D79] text-[0.6rem] md:text-xs'>
          Already have an account?{' '}
          <span
            className='font-semibold cursor-pointer hover:underline active:underline'
            onClick={() => setAuthState('login')}
          >
            Log in
          </span>
        </p>
      )}
    </section>
  )
}

export default FormSection
