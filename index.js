import { EsiMarkupHandler, EsiContext } from '@uniformdev/esi-cloudflare'

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false

// Main function where magic happens
async function handleRequest(request) {
  // re-constructing the request.
  request = new Request(request)
  // ensure origin acrivates personalization by checking this header
  request.headers.set('Accept-ESI', '1.0')

  // initiating fetch from the origin
  const response = await fetch(request)

  // establish esi context
  const esiContext = EsiContext(request)

  // run HTML rewriting that will return personalized page based on the Sitecore personalization rules
  var rewrittenResponse = new HTMLRewriter()
    .on('*', new EsiMarkupHandler({ debug: DEBUG, esiContext: esiContext }))
    .transform(response)

  // return rewritten response
  return rewrittenResponse
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
