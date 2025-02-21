import { get } from '@ember/object';
import BaseAdapter from './base';
import { getStorage, _buildKey } from '../helpers/storage';
import StorageArray from '../session/array';

export default BaseAdapter.extend({
  _storage: getStorage('session'),

  _getIndex(type) {
    const indices = get(this, '_indices');

    if (!indices[type]) {
      let storageKey = _buildKey(this, 'index-' + type);

      indices[type] = StorageArray.extend({ _storageKey: storageKey }).create();
    }

    return indices[type];
  },
});
