<template>
    <section class="assets">
        <div class="page-header">
            <h3 class="page-title">Assets</h3>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Assets</li>
              </ol>
            </nav>
          </div>
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                    <div class="dropdown mb-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            AKTIVA-1 Computer and Equipment
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="#" actived>AKTIVA-1 Computer and Equipment</a></li>
                          <li><a class="dropdown-item" href="#">AKTIVA-2</a></li>
                          <li><a class="dropdown-item" href="#">AKTIVA-3</a></li>
                        </ul>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Aktiva</h4>
                      <div class="row">
                          <div class="col-12 col-md-12 col-xs-12 mb-3">
                              <div class="row">
                                  <div class="col-3 col-md-5 col-sm-12 col-xs-12">
                                    <div class="table-responsive">
                                        <table class="table mb-3">
                                            <tbody>
                                                <tr>
                                                    <td class="text-white" style="border: none;"><strong>Aktiva</strong></td>
                                                    <td class="text-white" style="border: none;">:</td>
                                                    <td class="text-white" style="border: none;">AKTIVA-1 Computer and Equipment</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                  </div>
                                  <div class="col-3 col-md-4 col-sm-12 col-xs-12">
                                    
                                  </div>
                                  <!-- <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                                  
                                  </div> -->
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
                                                <th scope="col" rowspan="2" class="text-center">Keterangan</th>
                                                <th scope="col" colspan="3" class="text-center">Tanggal Perolehan</th>
                                                <th scope="col" colspan="3" class="text-center">Perolehan</th>
                                                <th scope="col" rowspan="2" class="text-center">Nilai Sisa</th>
                                                <th scope="col" rowspan="2" class="text-center">Umur Ekonomis (Tahun)</th>
                                                <th scope="col" rowspan="2" class="text-center">Persentasi penyusutan Per Tahun</th>
                                                <th scope="col" rowspan="2" class="text-center">Persentasi penyusutan Per Bulan</th>
                                                <th scope="col" rowspan="2" class="text-center">Penyusutan Mei-2019</th>
                                                <th scope="col" colspan="2" class="text-center">Akum. Peny. s.d. Tahun 2018</th>
                                                <th scope="col" colspan="2" class="text-center">Penyusutan Tahun 2019</th>
                                                <th scope="col" rowspan="2" class="text-center">Total Akumulasi Penyusutan</th>
                                                <th scope="col" rowspan="2" class="text-center">Nilai Buku</th>
                                            </tr>
                                            <tr>
                                                <th class="text-center">tanggal</th>
                                                <th class="text-center">Bulan</th>
                                                <th class="text-center">Tahun</th>
                                                <th class="text-center">unit</th>
                                                <th class="text-center">Harga</th>
                                                <th class="text-center">Jumlah</th>
                                                <th class="text-center">Bulan</th>
                                                <th class="text-center">Jumlah</th>
                                                <th class="text-center">Bulan</th>
                                                <th class="text-center">Jumlah</th>
                                            </tr>
                                          
                                            </thead>
                                            <tbody >
                                            <tr >
                                                <th class="text-white" scope="row">1</th>
                                                <td class="text-white">Processor Intel Core i5 7400</td>
                                                <td class="text-white">05</td>
                                                <td class="text-white">Oktober</td>
                                                <td class="text-white">2017</td>
                                                <td class="text-white">4</td>
                                                <td class="text-white">10.900.000</td>
                                                <td class="text-white">43.600.000</td>
                                                <td class="text-white"></td>
                                                <td class="text-white">4</td>
                                                <td class="text-white">25%</td>
                                                <td class="text-white">908.333</td>
                                                <td class="text-white">908.333</td>
                                                <td class="text-white">14</td>
                                                <td class="text-white">12.716.667</td>
                                                <td class="text-white">5</td>
                                                <td class="text-white">4.541.667</td>
                                                <td class="text-white">17.258.333</td>
                                                <td class="text-white">26.341.667</td>
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">2</th>
                                                <td class="text-white">Processor Intel Core i3 6100</td>
                                                <td class="text-white">05</td>
                                                <td class="text-white">Oktober</td>
                                                <td class="text-white">2017</td>
                                                <td class="text-white">1</td>
                                                <td class="text-white">11.000.000</td>
                                                <td class="text-white">11.000.000</td>
                                                <td class="text-white"></td>
                                                <td class="text-white">4</td>
                                                <td class="text-white">25%</td>
                                                <td class="text-white">229.167</td>
                                                <td class="text-white">229.167</td>
                                                <td class="text-white">14</td>
                                                <td class="text-white">3.208.333</td>
                                                <td class="text-white">5</td>
                                                <td class="text-white">1.145.833</td>
                                                <td class="text-white">4.354.167</td>
                                                <td class="text-white">6.645.833</td>
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">3</th>
                                                <td class="text-white">HDD ext 4TB WD Ultra New</td>
                                                <td class="text-white">05</td>
                                                <td class="text-white">Oktober</td>
                                                <td class="text-white">2017</td>
                                                <td class="text-white">1</td>
                                                <td class="text-white">10.900.000</td>
                                                <td class="text-white">43.600.00</td>
                                                <td class="text-white"></td>
                                                <td class="text-white">4</td>
                                                <td class="text-white">25%</td>
                                                <td class="text-white">908.333</td>
                                                <td class="text-white">908.333</td>
                                                <td class="text-white">14</td>
                                                <td class="text-white">12.716.667</td>
                                                <td class="text-white">5</td>
                                                <td class="text-white">4.541.667</td>
                                                <td class="text-white">17.258.333</td>
                                                <td class="text-white">26.341.667</td>
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">4</th>
                                                <td class="text-white">HDD ext 2TB WD My Passport</td>
                                                <td class="text-white">05</td>
                                                <td class="text-white">Oktober</td>
                                                <td class="text-white">2017</td>
                                                <td class="text-white">1</td>
                                                <td class="text-white">10.900.000</td>
                                                <td class="text-white">43.600.00</td>
                                                <td class="text-white"></td>
                                                <td class="text-white">4</td>
                                                <td class="text-white">25%</td>
                                                <td class="text-white">908.333</td>
                                                <td class="text-white">908.333</td>
                                                <td class="text-white">14</td>
                                                <td class="text-white">12.716.667</td>
                                                <td class="text-white">5</td>
                                                <td class="text-white">4.541.667</td>
                                                <td class="text-white">17.258.333</td>
                                                <td class="text-white">26.341.667</td>
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">5</th>
                                                <td class="text-white">DVD-RW ext LG</td>
                                                <td class="text-white">05</td>
                                                <td class="text-white">Oktober</td>
                                                <td class="text-white">2017</td>
                                                <td class="text-white">2</td>
                                                <td class="text-white">10.900.000</td>
                                                <td class="text-white">43.600.00</td>
                                                <td class="text-white"></td>
                                                <td class="text-white">4</td>
                                                <td class="text-white">25%</td>
                                                <td class="text-white">908.333</td>
                                                <td class="text-white">908.333</td>
                                                <td class="text-white">14</td>
                                                <td class="text-white">12.716.667</td>
                                                <td class="text-white">5</td>
                                                <td class="text-white">4.541.667</td>
                                                <td class="text-white">17.258.333</td>
                                                <td class="text-white">26.341.667</td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colspan="1"></td> 
                                                    <td class="text-white">Sub Total</td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td>
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