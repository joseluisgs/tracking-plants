class BaseTransformer {
  static fetchCollection(values) {
    return values.map((value) => this.fetch(value));
  }
}

export default BaseTransformer;
