export default {
    data() {
        return {
            dataTable: null
        }
    },
    props: {
        data: Array
    },
    watch: {
        data() {
            if (this.dataTable) {
                this.dataTable.destroy();
            }

            this.$nextTick(() => {
                this.dataTable = $("#table").DataTable({
                    language: {
                        emptyTable: "No Results Found"
                    }
                });
            });
        }
    }
}
