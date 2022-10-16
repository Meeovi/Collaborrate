"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersUpdateInput_1 = require("../../../inputs/NewslettersUpdateInput");
const NewslettersWhereUniqueInput_1 = require("../../../inputs/NewslettersWhereUniqueInput");
let UpdateOneNewslettersArgs = class UpdateOneNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersUpdateInput_1.NewslettersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NewslettersUpdateInput_1.NewslettersUpdateInput)
], UpdateOneNewslettersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput)
], UpdateOneNewslettersArgs.prototype, "where", void 0);
UpdateOneNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneNewslettersArgs);
exports.UpdateOneNewslettersArgs = UpdateOneNewslettersArgs;
