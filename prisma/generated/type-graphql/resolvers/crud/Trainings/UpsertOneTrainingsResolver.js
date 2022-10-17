"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTrainingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneTrainingsArgs_1 = require("./args/UpsertOneTrainingsArgs");
const Trainings_1 = require("../../../models/Trainings");
const helpers_1 = require("../../../helpers");
let UpsertOneTrainingsResolver = class UpsertOneTrainingsResolver {
    async upsertOneTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Trainings_1.Trainings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTrainingsArgs_1.UpsertOneTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTrainingsResolver.prototype, "upsertOneTrainings", null);
UpsertOneTrainingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trainings_1.Trainings)
], UpsertOneTrainingsResolver);
exports.UpsertOneTrainingsResolver = UpsertOneTrainingsResolver;
