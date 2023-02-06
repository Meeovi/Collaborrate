"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWebhooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksCreateInput_1 = require("../../../inputs/WebhooksCreateInput");
let CreateOneWebhooksArgs = class CreateOneWebhooksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksCreateInput_1.WebhooksCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebhooksCreateInput_1.WebhooksCreateInput)
], CreateOneWebhooksArgs.prototype, "data", void 0);
CreateOneWebhooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneWebhooksArgs);
exports.CreateOneWebhooksArgs = CreateOneWebhooksArgs;
