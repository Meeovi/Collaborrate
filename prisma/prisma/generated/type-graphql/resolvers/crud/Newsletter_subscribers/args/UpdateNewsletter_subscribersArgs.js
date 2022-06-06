"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersUpdateInput_1 = require("../../../inputs/Newsletter_subscribersUpdateInput");
const Newsletter_subscribersWhereUniqueInput_1 = require("../../../inputs/Newsletter_subscribersWhereUniqueInput");
let UpdateNewsletter_subscribersArgs = class UpdateNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersUpdateInput_1.Newsletter_subscribersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersUpdateInput_1.Newsletter_subscribersUpdateInput)
], UpdateNewsletter_subscribersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput)
], UpdateNewsletter_subscribersArgs.prototype, "where", void 0);
UpdateNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateNewsletter_subscribersArgs);
exports.UpdateNewsletter_subscribersArgs = UpdateNewsletter_subscribersArgs;
