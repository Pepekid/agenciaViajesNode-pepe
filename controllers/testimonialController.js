import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {
	// Validar el formulario
	const { name, email, mensaje } = req.body;

	const errores = [];

	if (name.trim() === '') {
		errores.push({ mensaje: 'El nombre está vacio' });
	}

	if (email.trim() === '') {
		errores.push({ mensaje: 'El correo está vacio' });
	}

	if (mensaje.trim() === '') {
		errores.push({ mensaje: 'El mensaje está vacio' });
	}

	if (errores.length > 0) {
		// Consultar Testimoniales Existentes
		const testimoniales = await Testimonial.findAll();

		// Mostrar la vista con errores
		res.render('testimoniales', {
			pagina: 'Testimoniales',
			testimoniales,
			errores,
			name,
			email,
			mensaje,
		});
	} else {
		// Almacenarlo en la BD

		try {
			await Testimonial.create({
				nombre: name,
				correo: email,
				mensaje,
			});
			res.redirect('/testimoniales');
		} catch (error) {
			console.log(error);
		}
	}
};

export { guardarTestimonial };
