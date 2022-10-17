"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesCreateInput_1 = require("../../../inputs/StatesCreateInput");
let CreateOneStatesArgs = class CreateOneStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesCreateInput_1.StatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatesCreateInput_1.StatesCreateInput)
], CreateOneStatesArgs.prototype, "data", void 0);
CreateOneStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneStatesArgs);
exports.CreateOneStatesArgs = CreateOneStatesArgs;
