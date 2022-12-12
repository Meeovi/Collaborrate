"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWebhooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksCreateManyInput_1 = require("../../../inputs/WebhooksCreateManyInput");
let CreateManyWebhooksArgs = class CreateManyWebhooksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebhooksCreateManyInput_1.WebhooksCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyWebhooksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyWebhooksArgs.prototype, "skipDuplicates", void 0);
CreateManyWebhooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyWebhooksArgs);
exports.CreateManyWebhooksArgs = CreateManyWebhooksArgs;
