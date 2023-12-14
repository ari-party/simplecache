export default class Cache {
  /**
   * @param {Number} ttl Time to live in milliseconds
   * @param {Function} refresh Refresh function
   */
  constructor(ttl, refresh) {
    if (typeof ttl !== "number") throw new Error("`ttl` is not of type number");
    if (typeof refresh !== "function")
      throw new Error("`refresh` is not of type function");

    this.ttl = ttl;
    this.refresh = refresh;
    this.lastRefresh = null;
    this.value = undefined;
  }

  /**
   * Refresh value if expired and return value
   *
   * @returns {any}
   */
  async getValue() {
    if (
      !this.lastRefresh ||
      new Date().getTime() >= this.lastRefresh + this.ttl
    ) {
      this.value = await Promise.resolve(this.refresh(...arguments));
      this.lastRefresh = new Date().getTime();
    }

    return this.value;
  }
}
