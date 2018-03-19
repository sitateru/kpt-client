<template>
  <section class="main" v-show="issues.length" v-cloak>
    <ul class="issue-list">
      <li v-for="issue in issues"
          class="issue"
          :key="issue.id"
          >
         <div class="view">
           <label @dblclick="editTodo(issue)">[{{ issue.type }}] {{ issue.title }}</label>
           <p>{{ issue.body }}</p>
         </div>
      </li>
  </ul>
  </section>
</template>

<script>
export default {
  name: 'IssueList',
  data () {
    return {
      issues: [
        { title: 'デプロイが遅い', body: 'デプロイのスピードが遅く、開発効率が下がっている', type: 'problem' },
        { title: 'ウォーターサーバーがほしい', body: '水分を気軽にとれず、効率が悪い', type: 'problem' },
        { title: 'コーヒーが飲める', body: 'コーヒー豆が用意されており、いつでも煎れられる', type: 'keep' },
        { title: 'Vuejsのドキュメンテーション', body: 'みんなでVuejsの知見を社内ブログにためる', type: 'try' },
      ]
    }
  }
}
</script>

<style scoped>
</style>
