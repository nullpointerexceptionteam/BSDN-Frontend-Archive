<template>
  <el-card class="me-area" :body-style="{ padding: '16px' }">
    <div class="me-article-header">

      <a @click="view(articleId)" class="me-article-title">{{title}}</a>
      <!-- <el-button v-if="weight > 0" class="me-article-icon" type="text">置顶</el-button> -->
      <el-button v-if="0 > 0" class="me-article-icon" type="text">置顶</el-button>
      <span class="me-pull-right me-article-count">
	    	<i class="me-icon-comment"></i>&nbsp;{{commentCount}}
	    </span>
      <span class="me-pull-right me-article-count">
	    	<i class="el-icon-view"></i>&nbsp;{{viewNumber}}
        <!-- <i class="el-icon-view"></i>&nbsp; -->
	    </span>
    </div>

    <div class="me-artile-description">
      <!-- {{summary}} -->
    </div>
    <div class="me-article-footer">
	  	<span class="me-article-author">
	    	<i class="me-icon-author"></i>&nbsp;{{nickName}}
	    </span>

      <el-tag v-for="t in tagInfos" :key="t.tagname" size="mini" type="success">{{t.tagname}}</el-tag>

      <span class="me-pull-right me-article-count">
	    	<i class="el-icon-time"></i>&nbsp;{{publishDate | format}}
	    </span>

    </div>
  </el-card>
</template>

<script>
  import { formatTime } from "../../utils/time";

  export default {
    name: 'ArticleItem',
    props: {
      articleId: Number,
      // weight: Number,
      title: String,
      commentCount: Number,
      viewNumber: Number,
      // summary: String,
      nickName: String,
      tagInfos: Array,
      publishDate: String
    },
    data() {
      return {}
    },
    methods: {
      view(articleId) {
        this.$router.push({path: `/view/${articleId}`})
      }
    }
  }
</script>

<style scoped>

  .me-article-header {
    /*padding: 10px 18px;*/
    padding-bottom: 10px;
  }

  .me-article-title {
    font-weight: 600;
  }

  .me-article-icon {
    padding: 3px 8px;
  }

  .me-article-count {
    color: #a6a6a6;
    padding-left: 14px;
    font-size: 13px;
  }

  .me-pull-right {
    float: right;
  }

  .me-artile-description {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  .me-article-author {
    color: #a6a6a6;
    padding-right: 18px;
    font-size: 13px;
  }

  .el-tag {
    margin-left: 6px;
  }

</style>
