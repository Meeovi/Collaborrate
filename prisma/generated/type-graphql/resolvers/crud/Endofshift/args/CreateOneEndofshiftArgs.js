"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftCreateInput_1 = require("../../../inputs/EndofshiftCreateInput");
let CreateOneEndofshiftArgs = class CreateOneEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftCreateInput_1.EndofshiftCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftCreateInput_1.EndofshiftCreateInput)
], CreateOneEndofshiftArgs.prototype, "data", void 0);
CreateOneEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneEndofshiftArgs);
exports.CreateOneEndofshiftArgs = CreateOneEndofshiftArgs;
