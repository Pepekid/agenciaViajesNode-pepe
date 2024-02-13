const guardarTestimonial = (req, res) => {
	// Validar el formulario
	const { name, email, mensaje } = req.body;

	const errores = [];

	if (name.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
		errores.push({ mensaje: 'campos Vacios' });
	}

	if (errores.length > 0) {
		// Mostrar la vista con errores
		res.render('testimoniales', {
			mensaje: errores,
		});
	}
};

export { guardarTestimonial };
