/**
 * This module is to handle any backend tasks and is the main entry point
 */

var express = require('express')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var config = require('../../config/config')

var app = express()

/**
 * Main function to put everything together
 */
function main () {
  app.listen(config.port, () => {
    console.log('App started...')
  })
}

main()
