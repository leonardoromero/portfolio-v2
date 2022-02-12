import { useFormik } from 'formik';
import { initialValues, validationSchema } from './schemas';
import * as Yup from 'yup';

export const Contact = () => {
	const handleContact = () => {};

	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object(validationSchema),
		onSubmit: obj => {
			// acá llega un objeto con la info ya validada y curada
			handleContact(obj);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className='w-80' >
			<div className='mb-6'>
				<label
					for='name'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					Your name
				</label>
				<input
					type='text'
					id='name'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='Name'
					onChange={formik.handleChange}
					error={formik.errors.name}
					required
				/>
				{formik?.errors?.name && (
					<span className='text-xs text-gray-700 dark:text-gray-500'>
						{formik.errors.name}
					</span>
				)}
			</div>
			<div className='mb-6'>
				<label
					for='lastName'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					Your last name
				</label>
				<input
					type='text'
					id='lastName'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='Last name'
					onChange={formik.handleChange}
					error={formik.errors.lastName}
					required
				/>
				{formik?.errors?.lastName && (
					<span className='text-xs text-gray-700 dark:text-gray-500'>
						{formik.errors.lastName}
					</span>
				)}
			</div>
			<div className='mb-6'>
				<label
					for='email'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					Your e-mail
				</label>
				<input
					type='email'
					id='email'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='name@domain.com'
					onChange={formik.handleChange}
					error={formik.errors.email}
					required
				/>
				{formik?.errors?.email && (
					<span className='text-xs text-gray-700 dark:text-gray-500'>
						{formik.errors.email}
					</span>
				)}
			</div>
<div>
			<label
				for='message'
				className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
			>
				Your message
			</label>
			<textarea
				id='message'
				rows='4'
				className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder='Tell me about your project'
				onChange={formik.handleChange}
				error={formik.errors.message}
			></textarea>
			{formik?.errors?.message && (
				<span className='text-xs text-gray-700 dark:text-gray-500'>
					{formik.errors.message}
				</span>
			)}
</div>
			<button
				type='submit'
				className='mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
			>
				Submit
			</button>
		</form>
	);
};
