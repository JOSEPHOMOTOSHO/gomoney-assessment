export const mockUserData = {
    username: 'dammy',
    email: 'dammy@user.com',
    password: 'cassava',
    confirmPassword: 'cassava',
    userType: 'ADMIN',
};
export const mockUser = {
    username: 'dammy',
    email: 'dammy@user.com',
    password: 'cassava',
    userType: 'USER',
};

export const mockAdmin = {
    username: 'dammy',
    email: 'dammy@user.com',
    password: 'cassava',
    userType: 'ADMIN',
};


export const mockUserDataLogin = {
    email: 'dammy@user.com',
    password: 'cassava',
};

export const mockUserDataInvalidLogin = {
    email: 'dammy@user.com',
    password: 'cassava1',
};

export const mockUserDataInvalidMail = {
    email: 'damy@user.com',
    password: 'cassava',
};

export const mockUserDataLoginNoMail = {
    password: 'cassava',
};
export const mockUserDataNoPassword = {
    email: 'dammy@user.com',
};

export const mockInvalidMail = {
    email: 'egg',
    password: 'beans'
}


export const mockUserWithoutMail = {
    username: 'dammy',
    password: 'cassava',
    confirmPassword: 'cassava',
    userType: 'ADMIN',
};

export const mockUserWithoutUsername = {
    password: 'cassava',
    confirmPassword: 'cassava',
    email: 'dammy@user.com',
    userType: 'ADMIN',
};

export const mockUserWithoutPassword = {
    username: 'dammy',
    email: 'dammy@user.com',
    confirmPassword: 'cassava',
    userType: 'ADMIN',
};

/*

import { Types } from 'mongoose';

export const mockUser = {
    _id: Types.ObjectId(),
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password',
    role: 'USER',
};

export const mockAdmin = {
    _id: Types.ObjectId(),
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    password: 'password',
    role: 'ADMIN',
};

export const healthyAdmin = {
    fullName: 'Test Admin',
    email: 'test-admin@example.com',
    password: 'password',
    role: 'ADMIN',
};

export const healthyUser = {
    fullName: 'Test User',
    email: 'test-user@example.com',
    password: 'password',
    role: 'ADMIN',
};

export const missingEmail = {
    fullName: 'John Doe',
    password: 'password',
    role: 'USER',
};

export const missingfirstName = {
    password: 'password',
    email: 'jane.doe@example.com',
    role: 'USER',
};

export const missingPassword = {
    fullName: 'John Doe',
    email: 'jane.doe@example.com',
    role: 'USER',
};

export const wrongRole = {
    fullName: 'John Doe',
    email: 'jane.doe@example.com',
    role: 'OWNER',
    password: 'password',
};

export const missingRole = {
    fullName: 'John Doe',
    email: 'jane.doe@example.com',
    password: 'password',
};
*/