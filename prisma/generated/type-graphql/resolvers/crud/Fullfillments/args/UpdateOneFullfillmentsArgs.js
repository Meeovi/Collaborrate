"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsUpdateInput_1 = require("../../../inputs/FullfillmentsUpdateInput");
const FullfillmentsWhereUniqueInput_1 = require("../../../inputs/FullfillmentsWhereUniqueInput");
let UpdateOneFullfillmentsArgs = class UpdateOneFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsUpdateInput_1.FullfillmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsUpdateInput_1.FullfillmentsUpdateInput)
], UpdateOneFullfillmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput)
], UpdateOneFullfillmentsArgs.prototype, "where", void 0);
UpdateOneFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneFullfillmentsArgs);
exports.UpdateOneFullfillmentsArgs = UpdateOneFullfillmentsArgs;
