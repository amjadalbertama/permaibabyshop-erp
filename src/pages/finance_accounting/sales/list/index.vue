<template>
    <section class="sales">
        <div class="page-header">
            <h3 class="page-title">Sales</h3>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Sales</li>
              </ol>
            </nav>
          </div>
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                </div>
              </div>
            </div>
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Jurnal Penjualan</h4>
                      <div class="row">
                          <div class="col-12 col-md-12 col-xs-12 mb-3">
                              <div class="row">
                                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                                    <div class="table-responsive">
                                      <table class="table mb-3">
                                          <tbody>
                                              <tr>
                                                  <td class="text-white" style="border: none;"><strong>Bulan</strong></td>
                                                  <td class="text-white" style="border: none;">:</td>
                                                  <td class="text-white" style="border: none;">Mei 2019</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                  </div>
                                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                                  
                                  </div>
                                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                                  
                                  </div>
                                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                                  <form class="" novalidate onsubmit="return false">
                                      <div class="d-flex align-items-center">
                                      <label class="p-2">Search: </label>
                                      <b-input-group class="mx-auto">
                                          <b-form-input></b-form-input>
                                          <b-input-group-append>
                                          <b-button variant="info" class="btn-md-custom"><i class="mdi mdi-magnify"></i></b-button>
                                          </b-input-group-append>
                                      </b-input-group>
                                      </div>
                                  </form>
                                  </div>
                              </div>
                          </div>
                          <div class="col-12 col-md-12 col-xs-12">
                              <div class="row">
                                  <div class="col-12 col-md-12 col-xs-12">
                                      <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th scope="col" rowspan="2" class="text-center">#</th>
                                                <th scope="col" rowspan="2" class="text-center">Tanggal</th>
                                                <th scope="col" rowspan="2" class="text-center">Kode Pembantu</th>
                                                <th scope="col" rowspan="2" class="text-center">Valid Code</th>
                                                <th scope="col" rowspan="2" class="text-center">Faktur</th>
                                                <th scope="col" rowspan="2" class="text-center">Uraian</th>
                                                <th scope="col" colspan="2" class="text-center">Akun</th>
                                                <th scope="col" rowspan="2" class="text-center">Valid Akun</th>
                                                <th scope="col" rowspan="2" class="text-center">Penjualan</th>
                                            </tr>
                                            <tr>
                                                <th class="text-center">Debit</th>
                                                <th class="text-center">Credit</th>
                                            </tr>
                                            </thead>
                                            <tbody >
                                            <tr >
                                                <th class="text-white" scope="row">1</th>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">-</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">1-140</td>
                                                <td class="text-white">4-100</td>
                                                <td class="text-white">True</td>
                                                <td class="text-white"></td>
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">2</th>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">-</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">1-140</td>
                                                <td class="text-white">2-040</td>
                                                <td class="text-white">True</td>
                                                <td class="text-white"></td>
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">3</th>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">-</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">1-180</td>
                                                <td class="text-white">1-140</td>
                                                <td class="text-white">True</td>
                                                <td class="text-white"></td>
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">4</th>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">-</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">1-140</td>
                                                <td class="text-white">2-040</td>
                                                <td class="text-white">True</td>
                                                <td class="text-white"></td>
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">5</th>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">-</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">1-140</td>
                                                <td class="text-white">4-100</td>
                                                <td class="text-white">True</td>
                                                <td class="text-white"></td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                              <tr>
                                                  <td colspan="8"></td> 
                                                  <td class="text-white">Jumlah</td> 
                                                  <td class="text-white"></td> 
                                              </tr>
                                          </tfoot>
                                        </table>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </section>
</template>