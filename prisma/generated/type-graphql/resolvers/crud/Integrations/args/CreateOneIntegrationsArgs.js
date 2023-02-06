"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsCreateInput_1 = require("../../../inputs/IntegrationsCreateInput");
let CreateOneIntegrationsArgs = class CreateOneIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsCreateInput_1.IntegrationsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsCreateInput_1.IntegrationsCreateInput)
], CreateOneIntegrationsArgs.prototype, "data", void 0);
CreateOneIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneIntegrationsArgs);
exports.CreateOneIntegrationsArgs = CreateOneIntegrationsArgs;
