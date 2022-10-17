<template>
  <div>
    <form  @submit.prevent="addTraining">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-teacher">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-teacher">
            <input type="submit" class="btn btn-warning" value="Save Training" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Training</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody class="row">
                    <tr class="col-lg-6">
                      <td>
                        <label for="type">Speakers</label><br>
                        <select id="productType" v-model="speakers" name="template" class="form-attribute">
                          <option v-for="speakers in findManyCustomers" :key="speakers.id" :value="speakers">{{ speakers.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="announcement">Announcements</label><br>
                        <select id="productAttribute" v-model="announcement" name="template" class="form-attribute">
                          <option v-for="announcement in findManyAgreements" :key="announcement.id" :value="announcement">
                            {{ announcement.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input v-model="name" type="text" required value="Training Name" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input v-model="grade" type="text" value="Grade" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input v-model="meetups" type="text" value="Meetups" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="isCompleted" v-model="isCompleted">
                          <option value="ongoing">Ongoing</option>
                          <option value="completed">Completed</option>
                          <option value="withdrawn">Withdrawn</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input v-model="badges" type="number" value="Training Badges" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input v-model="lab" type="text" value="Training Laboratory" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="isPublic" v-model="isPublic">
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                          <option value="draft">Draft</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="subject">Subject</label><br>
                        <select id="subject" v-model="subject">
                          <option v-for="categories in findManyCategories" :key="categories.id" :value="categories">
                            {{ categories.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="teacher">Teacher</label><br>
                        <select id="category" v-model="teacher">
                          <option v-for="teacher in findManyCustomers" :key="teacher.id" :value="teacher">
                            {{ teacher.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="city">City</label><br>
                        <select id="category" v-model="city">
                          <option v-for="city in findManyCities" :key="city.id" :value="city">
                            {{ city.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="events">States</label><br>
                        <select id="category" v-model="states">
                          <option v-for="events in findManyStates" :key="events.id" :value="events">
                            {{ events.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="student">Students</label><br>
                        <select id="category" v-model="student">
                          <option v-for="student in findManyCustomers" :key="student.id" :value="student">
                            {{ student.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="countries">Countries</label><br>
                        <select id="category" v-model="country">
                          <option v-for="countries in findManyCountries" :key="countries.id" :value="countries">
                            {{ countries.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="comment">Comment</label><br>
                        <select id="comment" v-model="comment">
                          <option v-for="comment in findManyReviews" :key="comment.id" :value="comment">
                            {{ comment.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="products">Products</label><br>
                        <select id="products" v-model="products">
                          <option v-for="products in findManyProducts" :key="products.id" :value="products">
                            {{ products.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="steps" v-model="steps">
                          <option value="petite">Petite</option>
                          <option value="xs">Extra Small</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="xl">Extra Large</option>
                          <option value="xxl">XXL</option>
                          <option value="bigntall">Big and Tall</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="trainingType" v-model="type">
                          <option value="course">Course</option>
                          <option value="material">Material</option>
                          <option value="school">School</option>
                          <option value="digiboard">Digital Board</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <label for="faqs">Frequently Asked Questions</label><br>
                        <select id="faqs" v-model="faqs">
                          <option v-for="faqs in findManySurveys" :key="faqs.id" :value="faqs">
                            {{ faqs.name }}</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
                <div class="accordion-item">
                  <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Content
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="table table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <textarea v-model="content" cols="50" rows="10" value="Add a longer Description"></textarea>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 id="headingThree" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Images and Videos
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <td>
                        <div class="media-upload-wrapper">
                          <input type="media" id="input-media-now" class="media-upload-input"
                            data-mdb-media-upload="media-upload" data-mdb-accepted-extensions="link/*" />
                        </div>
                      </td>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="headingFive" class="accordion-header">
                      <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Upload Training File(s)
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                      data-mdb-parent="#accordionExample">
                      <div class="accordion-body">
                        <td>
                          <div class="media-upload-wrapper">
                            <input type="media" id="input-media-now" class="media-upload-input"
                              data-mdb-media-upload="media-upload" />
                          </div>
                        </td>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="faqs-footer">
      <li><a href="/admin/add-new/add-new-category" target="_blank">
          <input type="submit" class="btn btn-warning" value="Add New Category" /></a></li>
      <li><a href="/admin/add-new/add-new-agreement" target="_blank">
          <input type="submit" class="btn btn-warning" value="Add New Announcement" /></a></li>
      <li><a href="/admin/add-new/add-new-checklist" target="_blank">
          <input type="submit" class="btn btn-warning" value="Add New Checklist" /></a></li>
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import findManyProducts from "~/graphql/queries/shop/products"
  import findManyCategories from "~/graphql/queries/shop/categories"
  import findManyCountries from "~/graphql/queries/shop/countries"
  import findManyAgreements from "~/graphql/queries/sales/agreements"
  import findManyCustomers from "~/graphql/queries/customers/customers"
  import findManyReviews from "~/graphql/queries/marketing/reviews"
  import findManyStates from "~/graphql/queries/shop/states"
  import findManyCities from "~/graphql/queries/shop/cities"

  const ADD_TRAININGS = gql`
    mutation ($announcement: String!, $teacher: String!, $content: String!, $comment: String!, $analytics: String!, $country: String!, $created_at: String!, $address: String!, $competency: String!, $media: String!, $grade: String!, $badges: String!, $id: String!, $link: String!, $city: String!, $course: String!, $states: String!, $name: String!, $fieldTrips: String!, $isCompleted: String!, $isPublic: String!, $lab: String!, $languages: String!, $faqs: String!, $meetups: String!, $origanalityReport: String!, $resource: String!, $subject: String!, $steps: String!, $digiboards: String!, $type: String!, $student: String!, $speakers: String!, $products: String!){
    createOneTrainings(data: {announcement: $announcement, teacher: $teacher, content: $content, comment: $comment, analytics: $analytics, country: $country, created_at: $created_at, address: $address, competency: $competency, media: $media, grade: $grade, badges: $badges, id: $id, link: $link, city: $city, course: $course, states: $states, name: $name, fieldTrips: $fieldTrips, isCompleted: $isCompleted, isPublic: $isPublic, lab: $lab, languages: $languages, faqs: $faqs, meetups: $meetups, origanalityReport: $origanalityReport, resource: $resource, subject: $subject, steps: $steps, digiboards: $digiboards, type: $type, student: $student, thumbnail: $thumbnail, speakers: $speakers, products: $products}) {
        announcement
        teacher
        content
        comment
        analytics
        country
        created_at
        address
        competency
        media
        grade
        badges
        id
        link
        city
        course
        states
        name
        fieldTrips
        isCompleted
        isPublic
        lab
        languages
        faqs
        meetups
        origanalityReport
        resource
        subject
        steps
        digiboards
        type
        student
        speakers
        products
  }
}`;


  export default {
    data() {
      return {
        announcement: [],
        teacher: [],
        content: " ",
        comment: [],
        analytics: " ",
        country: [],
        created_at: " ",
        address: " ",
        competency: " ",
        media: " ",
        grade: " ",
        badges: " ",
        id: " ",
        link: " ",
        city: [],
        course: " ",
        states: [],
        name: " ",
        fieldTrips: " ",
        isCompleted: " ",
        isPublic: " ",
        lab: " ",
        languages: " ",
        faqs: [],
        meetups: " ",
        origanalityReport: " ",
        resource: " ",
        subject: " ",
        steps: " ",
        digiboards: " ",
        type: " ",
        student: [],
        speakers: [],
        products: [],
        show: true
      }
    },
    head: {
      title: 'Add New Training'
    },

    methods: {
      async addTraining() {
        const announcement = this.announcement;
        const teacher = this.teacher;
        const content = this.content;
        const comment = this.comment;
        const analytics = this.analytics;
        const country = this.country;
        const created_at = this.created_at;
        const address = this.address;
        const competency = this.competency;
        const media = this.media;
        const grade = this.grade;
        const badges = this.badges;
        const id = this.id;
        const link = this.link;
        const city = this.city;
        const course = this.course;
        const states = this.states;
        const name = this.name;
        const fieldTrips = this.fieldTrips;
        const isCompleted = this.isCompleted;
        const isPublic = this.isPublic;
        const lab = this.lab;
        const languages = this.languages;
        const faqs = this.faqs;
        const meetups = this.meetups;
        const origanalityReport = this.origanalityReport;
        const resource = this.resource;
        const subject = this.subject;
        const steps = this.steps;
        const digiboards = this.digiboards;
        const type = this.type;
        const student = this.student;
        const speakers = this.speakers;
        const products = this.products;


        await this.$apollo.mutate({
          mutation: ADD_TRAININGS,
          variables: {
            announcement,
            teacher,
            content,
            comment,
            analytics,
            country,
            created_at,
            address,
            competency,
            media,
            grade,
            badges,
            id,
            link,
            city,
            course,
            states,
            name,
            fieldTrips,
            isCompleted,
            isPublic,
            lab,
            languages,
            faqs,
            meetups,
            origanalityReport,
            resource,
            subject,
            steps,
            digiboards,
            type,
            student,
            speakers,
            products,
          },
          update: (cache, {
            data: {
              insertCountries,
              insertProducts,
              insertStudents,
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCountries = insertCountries.returning;
              const insertedProducts = insertProducts.returning;
              const insertedStudents = insertStudents.returning;
              console.log(insertedCategory, insertedCountries, insertedStudents, insertedProducts)
              cache.writeQuery({
                query: findManyTrainings
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../shop/products'
          })
        }).catch(err => console.log(err));
        this.announcement = ' ';
        this.teacher = ' ';
        this.content = ' ';
        this.comment = ' ';
        this.analytics = ' ';
        this.country = ' ';
        this.created_at = ' ';
        this.address = ' ';
        this.competency = ' ';
        this.media = ' ';
        this.grade = ' ';
        this.badges = ' ';
        this.id = ' ';
        this.link = ' ';
        this.city = ' ';
        this.course = ' ';
        this.states = ' ';
        this.name = ' ';
        this.fieldTrips = ' ';
        this.isCompleted = ' ';
        this.isPublic = ' ';
        this.lab = ' ';
        this.languages = ' ';
        this.faqs = ' ';
        this.meetups = ' ';
        this.origanalityReport = ' ';
        this.resource = ' ';
        this.subject = ' ';
        this.steps = ' ';
        this.digiboards = ' ';
        this.type = ' ';
        this.student = ' ';
        this.speakers = ' ';
        this.products = ' ';
      },
    },
    apollo: {
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyAgreements: {
        prefetch: true,
        query: findManyAgreements
      },
      findManyCustomers: {
        prefetch: true,
        query: findManyCustomers
      },
      findManyCustomers: {
        prefetch: true,
        query: findManyCustomers
      },
      findManyReviews: {
        prefetch: true,
        query: findManyReviews
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
      },
      findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyStudents: {
        prefetch: true,
        query: findManyStudents
      },
      findManyProducts: {
        prefetch: true,
        query: findManyProducts
      }
    }
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
