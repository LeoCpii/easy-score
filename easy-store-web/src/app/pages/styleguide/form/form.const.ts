export const INPUTS = [
    {
        control: 'standard',
        required: false,
        disabled: false,
        label: 'Standard',
        type: 'text',
        placeholder: '',
        messageError: '',
    },
    {
        control: 'required',
        required: true,
        disabled: false,
        label: 'Required',
        type: 'text',
        placeholder: '',
        messageError: '',
    },
    {
        control: 'disabled',
        required: false,
        disabled: true,
        label: 'Disabled',
        type: 'text',
        placeholder: '',
        messageError: '',
    },
    {
        control: 'cpf',
        required: false,
        disabled: false,
        label: 'CPF',
        type: 'cpf',
        placeholder: '',
        messageError: '',
    },
    {
        control: 'cnpj',
        required: false,
        disabled: false,
        label: 'CNPJ',
        type: 'cnpj',
        placeholder: '',
        messageError: '',
    },
    {
        control: 'number',
        required: false,
        disabled: false,
        label: 'Number',
        type: 'number',
        placeholder: '',
        messageError: '',
    },
    {
        control: 'email',
        required: false,
        disabled: false,
        label: 'Email',
        type: 'email',
        placeholder: '',
        messageError: '',
    },
    {
        control: 'password',
        required: false,
        disabled: false,
        label: 'Password',
        type: 'password',
        placeholder: '',
        messageError: '',
    },
    {
        control: 'select',
        required: false,
        disabled: false,
        label: 'Select',
        type: 'select',
        placeholder: '',
        messageError: '',
    },
]

export const RADIO_GROUP = [
    { label: 'Valor 0', name: 'radio', value: 0 },
    { label: 'Valor 1', name: 'radio', value: 1 }
];

export const SELECT = [
    {
        label: 'Valor 0',
        value: 0
    },
    {
        label: 'Valor 1',
        value: 1
    },
    {
        label: 'Valor 2',
        value: 2
    },
];