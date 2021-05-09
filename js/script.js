$('#form-ajax').validate({
	rules:{
		name:{
			required: true,
			minlength: 2
		},
		email:{
			required: true,
			email: true
		},
		message:{
			required: true,
			minlength: 10
		}
	},
	messages:{
		name:{
			required: "Будь-ласка введіть Ваше ім'я",
			minlength: "Ім'я має бути коректне"
		},
		email:{
			required: "Це поле обов'язкове для заповнення",
			email: "Введіть коректний E-mail"
		},
		message:{
			required: "Це поле обов'язкове для заповнення",
			minlength: "Поле має містити не менше 10-ти символів"
		}
	}
});