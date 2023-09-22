'use strict'

const tblBarrios = use('App/Models/TblBarrios')
const tblEnfermedades = use('App/Models/TblEnfermedades')
const tblMedicamento = use('App/Models/TblMedicamento')

class HelperController {
  async rowsData({request, response}) {
    let result = [];
    let { model, currentPage, perPages } = request.all();

    switch(model) {
      case 'barrios':
        result = await this.paginateBarrio(currentPage, perPages);
      break;
      case 'enfermedades':
        result = await this.paginateEnfermedades(currentPage, perPages);
      break;
      case 'medicamentos':
        result = await this.paginateMedicamentos(currentPage, perPages);
      break;
    }
		return response.status(200).json(result);
	}

  async paginateBarrio(currentPage, perPages) {
		const data = await tblBarrios.query()
    .where('active', true)
    .with('tbl_departamento')
    .with('tbl_municipio')
    .paginate(currentPage, perPages)
    return data;
  }

  async paginateEnfermedades(currentPage, perPages) {
		const data = await tblEnfermedades.query()
    .paginate(currentPage, perPages)
    return data;
  }

  async paginateMedicamentos(currentPage, perPages) {
		const data = await tblMedicamento.query()
    .paginate(currentPage, perPages)
    return data;
  }

}

module.exports = HelperController
