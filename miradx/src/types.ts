type Address = {
    street: string;
    city: string;
    state: string;
    zip: string;
};

type FormData = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    dob: string,
}

type StepOneProps = {
    email: string,
    password: string,
    success: boolean,
    errors: {
        email?: string,
        password?: string,
        form?: {
            message?: string
        }
    },
    handleInputChange: React.ChangeEventHandler
}

type StepTwoProps = {
    firstName: string,
    lastName: string,
    dob: string,
    showAddress: boolean,
    address: Address,
    setShowAddress: Function,
    handleInputChange: React.ChangeEventHandler,
    handleAddressInputChange: React.ChangeEventHandler
}

export type {Address, FormData, StepOneProps, StepTwoProps}