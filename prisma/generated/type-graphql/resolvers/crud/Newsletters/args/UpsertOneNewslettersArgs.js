"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersCreateInput_1 = require("../../../inputs/NewslettersCreateInput");
const NewslettersUpdateInput_1 = require("../../../inputs/NewslettersUpdateInput");
const NewslettersWhereUniqueInput_1 = require("../../../inputs/NewslettersWhereUniqueInput");
let UpsertOneNewslettersArgs = class UpsertOneNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput)
], UpsertOneNewslettersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersCreateInput_1.NewslettersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NewslettersCreateInput_1.NewslettersCreateInput)
], UpsertOneNewslettersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersUpdateInput_1.NewslettersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NewslettersUpdateInput_1.NewslettersUpdateInput)
], UpsertOneNewslettersArgs.prototype, "update", void 0);
UpsertOneNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneNewslettersArgs);
exports.UpsertOneNewslettersArgs = UpsertOneNewslettersArgs;
