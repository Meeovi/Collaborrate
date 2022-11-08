"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersUpdateManyMutationInput_1 = require("../../../inputs/NewslettersUpdateManyMutationInput");
const NewslettersWhereInput_1 = require("../../../inputs/NewslettersWhereInput");
let UpdateManyNewslettersArgs = class UpdateManyNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersUpdateManyMutationInput_1.NewslettersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NewslettersUpdateManyMutationInput_1.NewslettersUpdateManyMutationInput)
], UpdateManyNewslettersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereInput_1.NewslettersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersWhereInput_1.NewslettersWhereInput)
], UpdateManyNewslettersArgs.prototype, "where", void 0);
UpdateManyNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyNewslettersArgs);
exports.UpdateManyNewslettersArgs = UpdateManyNewslettersArgs;
