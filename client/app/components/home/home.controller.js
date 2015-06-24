// *Sigh*
class HomeController {
  constructor($log) {
    $log('test');

  }
}

HomeController.$inject = ['$log'];

export {HomeController};