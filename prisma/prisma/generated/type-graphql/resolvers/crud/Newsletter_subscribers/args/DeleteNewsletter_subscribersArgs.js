"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersWhereUniqueInput_1 = require("../../../inputs/Newsletter_subscribersWhereUniqueInput");
let DeleteNewsletter_subscribersArgs = class DeleteNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput)
], DeleteNewsletter_subscribersArgs.prototype, "where", void 0);
DeleteNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteNewsletter_subscribersArgs);
exports.DeleteNewsletter_subscribersArgs = DeleteNewsletter_subscribersArgs;
