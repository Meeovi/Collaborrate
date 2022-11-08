"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersWhereInput_1 = require("../../../inputs/NewslettersWhereInput");
let DeleteManyNewslettersArgs = class DeleteManyNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereInput_1.NewslettersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersWhereInput_1.NewslettersWhereInput)
], DeleteManyNewslettersArgs.prototype, "where", void 0);
DeleteManyNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyNewslettersArgs);
exports.DeleteManyNewslettersArgs = DeleteManyNewslettersArgs;
