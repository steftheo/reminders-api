'use strict';
var _ = require('lodash');
var inflection = require('inflection');
var Qs = require('qs');
var utils = require('./utils');
/**
 * Generates the top level links object.
 * @param baseUrl
 * @param type
 * @param query
 * @param pag
 * @returns any TODO LINKS OBJECT
 */
function buildTop(baseUrl, type, pag, query) {
    var obj = {
        self: baseUrl + '/' + inflection.pluralize(type)
    };
    // Add pagination if given
    if (pag)
        _.assign(obj, buildPagination(baseUrl, type, pag, query));
    return obj;
}
exports.buildTop = buildTop;
/**
 * Generates pagination links for a collection.
 * @param baseUrl
 * @param type
 * @param pag
 * @param query
 * @returns any TODO PAGINATION LINKS OBJECT
 */
function buildPagination(baseUrl, type, pag, query) {
    if (query === void 0) { query = {}; }
    var baseLink = baseUrl + '/' + inflection.pluralize(type);
    query = _.omit(query, 'page');
    var queryStr = Qs.stringify(query, { encode: false });
    return {
        first: function () {
            return baseLink +
                '?page[limit]=' + pag.limit +
                '&page[offset]=0' +
                queryStr;
        },
        prev: function () {
            // No previous if its the first
            if (pag.offset === 0)
                return null;
            return baseLink +
                '?page[limit]=' + pag.limit +
                '&page[offset]=' + (pag.offset - pag.limit) +
                queryStr;
        },
        next: function (collection) {
            // No next if its the last
            if (collection.length < pag.limit ||
                (pag.total && pag.offset + pag.limit >= pag.total))
                return null;
            return baseLink +
                '?page[limit]=' + pag.limit +
                '&page[offset]=' + (pag.offset + pag.limit) +
                queryStr;
        },
        last: function () {
            // No last if no total to compare
            if (!pag.total)
                return null;
            return baseLink +
                '?page[limit]=' + pag.limit +
                '&page[offset]=' + (pag.total - pag.limit) +
                queryStr;
        }
    };
}
exports.buildPagination = buildPagination;
/**
 * Generates the resource's url.
 * @param baseUrl
 * @param modelType
 * @param query
 * @returns {{self: (function(any, any): string)}}
 */
function buildSelf(baseUrl, modelType, query) {
    return {
        self: function (data) {
            var link = baseUrl + '/' +
                inflection.pluralize(modelType);
            // If a model
            if (utils.isModel(data)) {
                var model = data;
                return link + '/' + model.id; // TODO ADD QUERY PARAMS AND PAGINATION
            }
            else if (utils.isCollection(data)) {
                return link;
            }
        }
    };
}
exports.buildSelf = buildSelf;
/**
 * Generates the relationship links inside the primary resource
 * @param baseUrl
 * @param modelType
 * @param relatedType
 * @param query
 * @returns {{self: (function(Data): string), related: (function(Data): string)}}
 */
function buildRelationship(baseUrl, modelType, relatedType, query) {
    return {
        self: function (data) {
            var link = baseUrl + '/' +
                inflection.pluralize(modelType);
            // Primary data is expected to be a model
            link += '/' + data.id;
            // Add relationship url component
            link += '/relationships/' + relatedType;
            return link;
        },
        related: function (data) {
            var link = baseUrl + '/' +
                inflection.pluralize(modelType);
            // Primary data is expected to be a model
            link += '/' + data.id;
            // Add relationship url component
            link += '/' + relatedType;
            return link;
        }
    };
}
exports.buildRelationship = buildRelationship;
//# sourceMappingURL=links.js.map