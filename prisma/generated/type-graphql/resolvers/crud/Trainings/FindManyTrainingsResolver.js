"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTrainingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyTrainingsArgs_1 = require("./args/FindManyTrainingsArgs");
const Trainings_1 = require("../../../models/Trainings");
const helpers_1 = require("../../../helpers");
let FindManyTrainingsResolver = class FindManyTrainingsResolver {
    async findManyTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Trainings_1.Trainings], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTrainingsArgs_1.FindManyTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTrainingsResolver.prototype, "findManyTrainings", null);
FindManyTrainingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trainings_1.Trainings)
], FindManyTrainingsResolver);
exports.FindManyTrainingsResolver = FindManyTrainingsResolver;
