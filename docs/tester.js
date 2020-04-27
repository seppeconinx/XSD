'use strict'
const buttonValidate = document.getElementById('button--validate');
const xmlString = document.getElementById('input--xmlstr');
const inputSchema = document.getElementById('input--schema');
const schemas = {
	'general user': 'https://raw.githubusercontent.com/Anyvent/XSD/master/general_user.xsd'
}

// Load schemas
for(const schema in schemas) {
	const opt = document.createElement('option');
	opt.innerText = schema;
	inputSchema.appendChild(opt);
}

function validate() {
	const schemaName = inputSchema.options[inputSchema.selectedIndex].value
	const schemaUrl = schemas[schemaName];
	const schema = await getSchema(schemaUrl);
	console.log(`validating ${xmlString.value}`);
	console.log(`schema: ${schema}`);
}

async function getSchema(url) {
	const response = await fetch(url);
	return await response.text();
}

buttonValidate.addEventListener('click', validate);
