"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersWhereUniqueInput_1 = require("../../../inputs/Newsletter_subscribersWhereUniqueInput");
let FindUniqueNewsletter_subscribersArgs = class FindUniqueNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput)
], FindUniqueNewsletter_subscribersArgs.prototype, "where", void 0);
FindUniqueNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueNewsletter_subscribersArgs);
exports.FindUniqueNewsletter_subscribersArgs = FindUniqueNewsletter_subscribersArgs;
