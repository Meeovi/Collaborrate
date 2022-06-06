"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesCreateInput_1 = require("../../../inputs/StatesCreateInput");
let CreateStatesArgs = class CreateStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesCreateInput_1.StatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatesCreateInput_1.StatesCreateInput)
], CreateStatesArgs.prototype, "data", void 0);
CreateStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateStatesArgs);
exports.CreateStatesArgs = CreateStatesArgs;
