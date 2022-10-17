"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsCreateInput_1 = require("../../../inputs/TargetsCreateInput");
let CreateOneTargetsArgs = class CreateOneTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsCreateInput_1.TargetsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsCreateInput_1.TargetsCreateInput)
], CreateOneTargetsArgs.prototype, "data", void 0);
CreateOneTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTargetsArgs);
exports.CreateOneTargetsArgs = CreateOneTargetsArgs;
