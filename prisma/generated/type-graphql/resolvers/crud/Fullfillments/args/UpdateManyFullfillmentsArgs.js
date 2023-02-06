"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsUpdateManyMutationInput_1 = require("../../../inputs/FullfillmentsUpdateManyMutationInput");
const FullfillmentsWhereInput_1 = require("../../../inputs/FullfillmentsWhereInput");
let UpdateManyFullfillmentsArgs = class UpdateManyFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsUpdateManyMutationInput_1.FullfillmentsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsUpdateManyMutationInput_1.FullfillmentsUpdateManyMutationInput)
], UpdateManyFullfillmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereInput_1.FullfillmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereInput_1.FullfillmentsWhereInput)
], UpdateManyFullfillmentsArgs.prototype, "where", void 0);
UpdateManyFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyFullfillmentsArgs);
exports.UpdateManyFullfillmentsArgs = UpdateManyFullfillmentsArgs;
