"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftUpdateManyMutationInput_1 = require("../../../inputs/EndofshiftUpdateManyMutationInput");
const EndofshiftWhereInput_1 = require("../../../inputs/EndofshiftWhereInput");
let UpdateManyEndofshiftArgs = class UpdateManyEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftUpdateManyMutationInput_1.EndofshiftUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftUpdateManyMutationInput_1.EndofshiftUpdateManyMutationInput)
], UpdateManyEndofshiftArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereInput_1.EndofshiftWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereInput_1.EndofshiftWhereInput)
], UpdateManyEndofshiftArgs.prototype, "where", void 0);
UpdateManyEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyEndofshiftArgs);
exports.UpdateManyEndofshiftArgs = UpdateManyEndofshiftArgs;
