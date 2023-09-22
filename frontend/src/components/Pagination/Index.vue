<template>
    <div>
        <b-row  class="justify-content-lg-end">
            <b-col lg="12" md="12">
                <label>
                    <small>
                        <strong>Filas por página:</strong>
                    </small>
                </label>
                <b-form-select class="ml-3 mr-3 col-md-1 justify-content-lg-end" col-sm-1 col-xs-2
                  v-model="rowPerPage"
                  :options="pageOption"
                >
                </b-form-select>
                <small>
                    <strong>
                        {{currentPageInitial == 1? 1: (currentPageInitial-1) * (rowPerPage) + 1}} - {{rowPerPage*currentPageInitial > totalRows ? totalRows:rowPerPage*currentPageInitial}} de {{totalRows}} registros
                    </strong>
                </small>
            </b-col>
        </b-row>

        <b-pagination
            v-model="currentPageInitial"
            :total-rows="totalRows"
            :per-page="rowPerPage"
            class="mt-3 text-center"
            align="center"
        ></b-pagination>
    </div>
</template>
<script>
export default {
    computed: {
        rowPerPage: {
            get: function(){
                return this.perPage;
            },
            set: function(newValue){
                this.$emit('update:perPage', newValue)
            }
        },
        currentPageInitial: {
            get: function(){
                return this.currentPage;
            },
            set: function(newValue){
                this.$emit('update:currentPage', newValue)
            }
        },
    },
    props: {
        totalRows: { type: Number, required: true },
        currentPage: { type: Number, required: true },
        perPage: { type: Number, required: true },
        pageOptions: { type: Array }
    },
    data() {
        return {
            pageOption:this.pageOptions != null? this.pageOptions : [1, 5, 10, 20, 50]
        }
    }
}
</script>