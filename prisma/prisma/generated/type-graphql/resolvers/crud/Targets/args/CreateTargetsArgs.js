"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsCreateInput_1 = require("../../../inputs/TargetsCreateInput");
let CreateTargetsArgs = class CreateTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsCreateInput_1.TargetsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsCreateInput_1.TargetsCreateInput)
], CreateTargetsArgs.prototype, "data", void 0);
CreateTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTargetsArgs);
exports.CreateTargetsArgs = CreateTargetsArgs;
