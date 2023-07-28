-- DropForeignKey
ALTER TABLE `achievement` DROP FOREIGN KEY `Achievement_userId_fkey`;

-- DropForeignKey
ALTER TABLE `chat` DROP FOREIGN KEY `Chat_receiverId_fkey`;

-- DropForeignKey
ALTER TABLE `chat` DROP FOREIGN KEY `Chat_senderId_fkey`;

-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_hostId_fkey`;

-- DropForeignKey
ALTER TABLE `eventattendee` DROP FOREIGN KEY `EventAttendee_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `eventattendee` DROP FOREIGN KEY `EventAttendee_userId_fkey`;

-- DropForeignKey
ALTER TABLE `friend` DROP FOREIGN KEY `Friend_friendOfId_fkey`;

-- DropForeignKey
ALTER TABLE `friend` DROP FOREIGN KEY `Friend_friendWithId_fkey`;

-- DropForeignKey
ALTER TABLE `friendrequest` DROP FOREIGN KEY `FriendRequest_receiverId_fkey`;

-- DropForeignKey
ALTER TABLE `friendrequest` DROP FOREIGN KEY `FriendRequest_senderId_fkey`;

-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_senderId_receiverId_fkey`;

-- CreateIndex
CREATE INDEX `Chat_senderId_idx` ON `Chat`(`senderId`);

-- CreateIndex
CREATE INDEX `EventAttendee_userId_idx` ON `EventAttendee`(`userId`);

-- CreateIndex
CREATE INDEX `Friend_friendWithId_idx` ON `Friend`(`friendWithId`);

-- RenameIndex
ALTER TABLE `achievement` RENAME INDEX `Achievement_userId_fkey` TO `Achievement_userId_idx`;

-- RenameIndex
ALTER TABLE `chat` RENAME INDEX `Chat_receiverId_fkey` TO `Chat_receiverId_idx`;

-- RenameIndex
ALTER TABLE `event` RENAME INDEX `Event_hostId_fkey` TO `Event_hostId_idx`;

-- RenameIndex
ALTER TABLE `eventattendee` RENAME INDEX `EventAttendee_eventId_fkey` TO `EventAttendee_eventId_idx`;

-- RenameIndex
ALTER TABLE `friend` RENAME INDEX `Friend_friendOfId_fkey` TO `Friend_friendOfId_idx`;

-- RenameIndex
ALTER TABLE `friendrequest` RENAME INDEX `FriendRequest_receiverId_fkey` TO `FriendRequest_receiverId_idx`;

-- RenameIndex
ALTER TABLE `friendrequest` RENAME INDEX `FriendRequest_senderId_fkey` TO `FriendRequest_senderId_idx`;

-- RenameIndex
ALTER TABLE `message` RENAME INDEX `Message_senderId_receiverId_fkey` TO `Message_senderId_receiverId_idx`;
