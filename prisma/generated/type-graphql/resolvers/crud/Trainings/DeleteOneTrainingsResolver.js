"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTrainingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneTrainingsArgs_1 = require("./args/DeleteOneTrainingsArgs");
const Trainings_1 = require("../../../models/Trainings");
const helpers_1 = require("../../../helpers");
let DeleteOneTrainingsResolver = class DeleteOneTrainingsResolver {
    async deleteOneTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Trainings_1.Trainings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTrainingsArgs_1.DeleteOneTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTrainingsResolver.prototype, "deleteOneTrainings", null);
DeleteOneTrainingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trainings_1.Trainings)
], DeleteOneTrainingsResolver);
exports.DeleteOneTrainingsResolver = DeleteOneTrainingsResolver;
