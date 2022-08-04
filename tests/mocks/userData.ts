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