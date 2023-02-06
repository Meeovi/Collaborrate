"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsCreateInput_1 = require("../../../inputs/PluginsCreateInput");
let CreateOnePluginsArgs = class CreateOnePluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsCreateInput_1.PluginsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsCreateInput_1.PluginsCreateInput)
], CreateOnePluginsArgs.prototype, "data", void 0);
CreateOnePluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePluginsArgs);
exports.CreateOnePluginsArgs = CreateOnePluginsArgs;
