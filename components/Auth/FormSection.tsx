import UserLoginCredentialsSchema from '@/schemas/UserLoginCredentials.schema'
import UserRegisterCredentialsSchema from '@/schemas/UserRegisterCredentials.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import EyeOutline from '../Icons/EyeOutline'
import EyeOutlineCrossed from '../Icons/EyeOutlineCrossed'
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

type AuthState = 'login' | 'register'

type UserLoginCredentials = z.infer<typeof UserLoginCredentialsSchema>

type UserRegisterCredentials = z.infer<typeof UserRegisterCredentialsSchema>

const FormSection = () => {
  const [authState, setAuthState] = useState<AuthState>('register')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const form = useForm<UserLoginCredentials | UserRegisterCredentials>({
    resolver: zodResolver(
      authState === 'login'
        ? UserLoginCredentialsSchema
        : UserRegisterCredentialsSchema
    )
  })

  const onSubmit = async (
    data: UserLoginCredentials | UserRegisterCredentials
  ) => {}

  return (
    <section className='md:w-[45%] md:p-10 rounded-lg bg-white md:space-y-7 md:h-[40rem]'>
      <p className='md:text-2xl'>Create your Beacon account</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='md:space-y-4'>
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
                    className='md:text-base md:py-4 md:px-5 rounded-lg'
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
                    className='md:text-base md:py-4 md:pl-5 md:pr-14 rounded-lg'
                  />
                </FormControl>

                {!isPasswordVisible ? (
                  <EyeOutline
                    className='absolute top-0 md:right-4 cursor-pointer hover:brightness-50 transition'
                    setIsPasswordVisible={setIsPasswordVisible}
                  />
                ) : (
                  <EyeOutlineCrossed
                    className='absolute top-0 md:right-4 cursor-pointer hover:brightness-50 transition'
                    setIsPasswordVisible={setIsPasswordVisible}
                  />
                )}
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
                      className='md:text-base md:py-4 md:pl-5 md:pr-14 rounded-lg'
                    />
                  </FormControl>

                  {!isPasswordVisible ? (
                    <EyeOutline
                      className='absolute top-0 md:right-4 cursor-pointer hover:brightness-50 transition'
                      setIsPasswordVisible={setIsPasswordVisible}
                    />
                  ) : (
                    <EyeOutlineCrossed
                      className='absolute top-0 md:right-4 cursor-pointer hover:brightness-50 transition'
                      setIsPasswordVisible={setIsPasswordVisible}
                    />
                  )}
                </FormItem>
              )}
            />
          )}

          <div>
            <Button
              type='submit'
              className='md:w-full md:py-5 rounded-lg md:mt-3 md:text-base font-semibold border bg-[#60007D]'
            >
              {authState === 'login' ? 'Login' : 'Create Account'}
            </Button>
          </div>
        </form>
      </Form>

      {authState === 'login' ? (
        <p className='text-[#756D79] md:text-xs'>
          Don&apos;t have an account?{' '}
          <span
            className='font-semibold cursor-pointer hover:underline active:underline'
            onClick={() => setAuthState('register')}
          >
            Create one
          </span>
        </p>
      ) : (
        <p className='text-[#756D79] md:text-xs'>
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
