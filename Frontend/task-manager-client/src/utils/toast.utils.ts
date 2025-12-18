// showing toast messages
import type { TypeOptions } from 'react-toastify'
import { toast } from 'react-toastify'

// success message
export const successMessage = (message: string) => {
    toast.success(message, {
        position: 'top-center',
        autoClose: 5000,
        theme: 'dark',
        pauseOnHover: true
    })
}

// failure message
export const failureMessage = (message: string) => {
    toast.success(message, {
        position: 'top-center',
        autoClose: 5000,
        theme: 'dark',
        pauseOnHover: true
    })
}

// pending message
export const pendingMessage = () => {
    return toast.loading("Please wait...")
}

export const updateToast = (
    id: string | number,
    message: string,
    type: TypeOptions
) => {
    toast.update(id, {
        render: message,
        type,
        isLoading: false,
        autoClose: 3000,
    });
};






