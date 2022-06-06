"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersCreateInput_1 = require("../../../inputs/Newsletter_subscribersCreateInput");
let CreateNewsletter_subscribersArgs = class CreateNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateInput_1.Newsletter_subscribersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateInput_1.Newsletter_subscribersCreateInput)
], CreateNewsletter_subscribersArgs.prototype, "data", void 0);
CreateNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateNewsletter_subscribersArgs);
exports.CreateNewsletter_subscribersArgs = CreateNewsletter_subscribersArgs;
