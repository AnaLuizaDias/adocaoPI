<script setup>
import CabecalhoComp from "@/components/CabecalhoComp.vue";
</script>

<template>
  <CabecalhoComp></CabecalhoComp>
  
  <main style="padding-top: 250px" class="mt-5">
    <div class="container">
      <!--Section: Content-->
      <section>
        <div class="row">
          <div class="col-md-6 gx-5 mb-4">
            <div
              class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://www.petz.com.br/blog/wp-content/uploads/2022/04/Calopsita-arlequim-2-1280x720.jpg"
                class="img-fluid"
              />
              <a href="#!">
                <div
                  class="mask"
                  style="background-color: rgba(251, 251, 251, 0.15)"
                ></div>
              </a>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4">
            <h4><strong>Facilis consequatur eligendi</strong></h4>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              consequatur eligendi quisquam doloremque vero ex debitis veritatis
              placeat unde animi laborum sapiente illo possimus, commodi
              dignissimos obcaecati illum maiores corporis.
            </p>
            <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              itaque voluptate nesciunt laborum incidunt. Officia, quam
              consectetur. Earum eligendi aliquam illum alias, unde optio
              accusantium soluta, iusto molestiae adipisci et?
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.tabela {
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 50px;
}
</style>
