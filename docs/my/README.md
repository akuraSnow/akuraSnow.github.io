<template>
  <div class="page-my" id="resume">
   
    这是一个不简单的网站
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>

<style lang="scss">
.page-my {
  display: flex;

  .relate-me {
    flex: 1;
    background: #052a46;

    .avatar-wrapper {
      width: 162px;
      height: 192px;
      margin: 50px auto;

      .el-card__body {
        padding: 6px;
      }

      .avatar {
        width: 150px;
        height: 180px;
      }
    }

    .block {
      padding: 0 20px;
      color: #fff;

      .title {
        font-size: 18px;
        font-weight: bold;
        background: #1870bd;
        padding: 6px 12px;
      }

      .items {
        padding-left: 28px;
      }
    }

    .block:last-child {
      margin-bottom: 50px;
    }
  }

  .my-content {
    flex: 2;
    background: #fbfbfb;
    padding: 50px 20px;

    .introduction {
      .title {
        font-size: 28px;
        font-weight: bold;
      }
    }

    .block {
      margin-top: 20px;

      .header {
        display: flex;

        .title {
          font-size: 18px;
          font-weight: bold;
        }

        .line {
          flex: 1;
          margin-left: 10px;

          div {
            margin-top: 12px;
            border-bottom: 4px solid #1870bd;
          }
        }
      }

      .block-content {

      }
    }
  }
}
</style>
