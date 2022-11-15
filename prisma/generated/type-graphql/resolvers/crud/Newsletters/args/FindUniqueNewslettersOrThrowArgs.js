"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueNewslettersOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersWhereUniqueInput_1 = require("../../../inputs/NewslettersWhereUniqueInput");
let FindUniqueNewslettersOrThrowArgs = class FindUniqueNewslettersOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput)
], FindUniqueNewslettersOrThrowArgs.prototype, "where", void 0);
FindUniqueNewslettersOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueNewslettersOrThrowArgs);
exports.FindUniqueNewslettersOrThrowArgs = FindUniqueNewslettersOrThrowArgs;
