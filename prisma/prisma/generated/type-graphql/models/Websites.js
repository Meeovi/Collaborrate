"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Websites = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const WebsitesCount_1 = require("../resolvers/outputs/WebsitesCount");
let Websites = class Websites {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Websites.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Websites.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Websites.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Websites.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Websites.prototype, "shop", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Websites.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCount_1.WebsitesCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesCount_1.WebsitesCount)
], Websites.prototype, "_count", void 0);
Websites = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Websites", {
        isAbstract: true
    })
], Websites);
exports.Websites = Websites;
