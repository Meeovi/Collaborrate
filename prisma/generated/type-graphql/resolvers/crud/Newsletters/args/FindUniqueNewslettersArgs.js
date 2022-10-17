"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersWhereUniqueInput_1 = require("../../../inputs/NewslettersWhereUniqueInput");
let FindUniqueNewslettersArgs = class FindUniqueNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput)
], FindUniqueNewslettersArgs.prototype, "where", void 0);
FindUniqueNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueNewslettersArgs);
exports.FindUniqueNewslettersArgs = FindUniqueNewslettersArgs;
